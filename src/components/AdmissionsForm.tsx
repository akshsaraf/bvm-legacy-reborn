import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Upload, User, Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";

const admissionFormSchema = z.object({
  // Student Information
  studentName: z.string().min(2, "Student name must be at least 2 characters"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  gender: z.string({
    required_error: "Please select gender",
  }),
  grade: z.string({
    required_error: "Please select grade applying for",
  }),
  previousSchool: z.string().min(2, "Previous school name is required"),
  
  // Parent/Guardian Information
  parentName: z.string().min(2, "Parent/Guardian name must be at least 2 characters"),
  relationship: z.string({
    required_error: "Please select relationship",
  }),
  parentEmail: z.string().email("Invalid email address"),
  parentPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  
  // Address Information
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().min(6, "Pincode must be 6 digits"),
  
  // Additional Information
  previousGrades: z.string().optional(),
  specialNeeds: z.string().optional(),
  extracurricular: z.string().optional(),
  reasonForJoining: z.string().min(10, "Please provide a reason for joining BVM"),
});

type AdmissionFormValues = z.infer<typeof admissionFormSchema>;

const AdmissionsForm = () => {
  const form = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
      studentName: "",
      parentName: "",
      parentEmail: "",
      parentPhone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      previousSchool: "",
      previousGrades: "",
      specialNeeds: "",
      extracurricular: "",
      reasonForJoining: "",
    },
  });

  const onSubmit = (data: AdmissionFormValues) => {
    console.log("Admission form submitted:", data);
    toast({
      title: "Application Submitted Successfully!",
      description: "We have received your admission application. Our admissions team will contact you within 2-3 business days.",
    });
    form.reset();
  };

  const grades = [
    "Pre-KG", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
    "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-playfair text-bvm-navy">
          <GraduationCap className="inline-block mr-2 h-8 w-8" />
          Admission Application Form
        </CardTitle>
        <CardDescription className="text-lg">
          Begin your journey with BVM - Fill out the form below to apply for admission
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Student Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <User className="h-5 w-5 text-bvm-gold" />
                <h3 className="text-xl font-semibold text-bvm-navy">Student Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="studentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter student's full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth *</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("2005-01-01")
                            }
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="grade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grade Applying For *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {grades.map((grade) => (
                            <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="previousSchool"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous School *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter previous school name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Parent/Guardian Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <User className="h-5 w-5 text-bvm-gold" />
                <h3 className="text-xl font-semibold text-bvm-navy">Parent/Guardian Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="parentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent/Guardian Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter parent/guardian name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="relationship"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Relationship *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select relationship" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="father">Father</SelectItem>
                          <SelectItem value="mother">Mother</SelectItem>
                          <SelectItem value="guardian">Guardian</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="parentEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="parentPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Address Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <MapPin className="h-5 w-5 text-bvm-gold" />
                <h3 className="text-xl font-semibold text-bvm-navy">Address Information</h3>
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Complete Address *</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter complete address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter state" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pincode *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter pincode" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <GraduationCap className="h-5 w-5 text-bvm-gold" />
                <h3 className="text-xl font-semibold text-bvm-navy">Additional Information</h3>
              </div>

              <FormField
                control={form.control}
                name="previousGrades"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous Academic Performance</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Mention grades/percentage from previous school" {...field} />
                    </FormControl>
                    <FormDescription>
                      Optional: Share academic achievements or grades from previous school
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="extracurricular"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Extracurricular Activities</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Sports, arts, music, or other activities the student is interested in" {...field} />
                    </FormControl>
                    <FormDescription>
                      Optional: Mention any sports, arts, or other activities
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialNeeds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Educational Needs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Any special educational requirements or accommodations needed" {...field} />
                    </FormControl>
                    <FormDescription>
                      Optional: Please mention if the student requires any special educational support
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reasonForJoining"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why do you want to join BVM? *</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Share your reasons for choosing BVM for your child's education" {...field} />
                    </FormControl>
                    <FormDescription>
                      Tell us what attracted you to BVM and how you believe we can help your child grow
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                type="submit" 
                className="flex-1 bg-bvm-gold hover:bg-bvm-gold/90 text-bvm-navy font-semibold py-3"
              >
                Submit Application
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => form.reset()}
                className="flex-1"
              >
                Reset Form
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AdmissionsForm;