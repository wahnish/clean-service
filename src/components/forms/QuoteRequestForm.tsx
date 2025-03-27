import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { format } from "date-fns";

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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  serviceType: z.string().min(1, { message: "Please select a service type." }),
});

type FormValues = z.infer<typeof formSchema>;

const QuoteRequestForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);

    // Send email to support@healthycleanhomes.com
    // In a real application, this would be handled by a backend service
    // Here we're simulating the email sending process
    try {
      // This is a mock implementation - in a real app, you would use a backend API
      // or a service like EmailJS, SendGrid, etc.
      console.log("Sending email to support@healthycleanhomes.com");
      console.log("Form data:", JSON.stringify(data, null, 2));

      // Set submitted state to true to show confirmation message
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

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
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-border/40">
      <h2 className="text-2xl font-semibold mb-6">Request a Free Quote</h2>
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
          >
            Get Your Free Estimate
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QuoteRequestForm;
