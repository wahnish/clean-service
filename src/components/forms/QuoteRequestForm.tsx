import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CheckCircle, AlertCircle } from "lucide-react";
import { format } from "date-fns";
import { createClient } from "@supabase/supabase-js";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  serviceType: z.string().min(1, { message: "Please select a service type." }),
});

type FormValues = z.infer<typeof formSchema>;

const QuoteRequestForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormError(null);

    try {
      // Insert record into quote_requests table
      const { error } = await supabase.from("quote_requests").insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          service_type: data.serviceType,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      // Show success message
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError(
        error instanceof Error
          ? error.message
          : "Failed to submit request. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm border border-border/40 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Quote Request Received!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for your interest in our cleaning services. Your request has
          been sent to our team.
        </p>
        <p className="text-gray-600 mb-6">
          Please allow 1-2 business days for our team to review your request and
          get back to you with a customized quote.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-border/40 w-full">
      <h2 className="text-2xl font-semibold mb-6">Request a Free Quote</h2>
      {formError && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage className="flex text-lg" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="standard">
                        Standard Cleaning
                      </SelectItem>
                      <SelectItem value="deep">Deep Cleaning</SelectItem>
                      <SelectItem value="move">Move In/Out Cleaning</SelectItem>
                      <SelectItem value="recurring">
                        Recurring Cleaning
                      </SelectItem>
                      <SelectItem value="airbnb">Airbnb Cleaning</SelectItem>
                      <SelectItem value="onetime">One-Time Cleaning</SelectItem>
                      <SelectItem value="vacation">
                        Vacation Rental Cleaning
                      </SelectItem>
                      <SelectItem value="construction">
                        Post-Construction Cleaning
                      </SelectItem>
                      <SelectItem value="special">
                        Special Occasion Cleaning
                      </SelectItem>
                      <SelectItem value="other">Other Services</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full py-[2.5rem] hover:bg-yellow-400 hover:text-black transition-all duration-200 ease-out"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Your Free Estimate"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QuoteRequestForm;
