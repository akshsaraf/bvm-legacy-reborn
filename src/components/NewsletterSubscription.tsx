import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

const NewsletterSubscription = () => {
  const form = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: NewsletterValues) => {
    console.log("Newsletter subscription:", data);
    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for subscribing to our newsletter. You'll receive updates about BVM events and news.",
    });
    form.reset();
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-bvm-gold/10 to-bvm-heritage/10 border-bvm-gold/20">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-playfair text-bvm-navy flex items-center justify-center gap-2">
          <Bell className="h-5 w-5" />
          Stay Updated
        </CardTitle>
        <CardDescription>
          Subscribe to receive the latest news and updates from BVM
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="pl-10"
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-bvm-gold hover:bg-bvm-gold/90 text-bvm-navy font-semibold"
            >
              Subscribe Now
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default NewsletterSubscription;