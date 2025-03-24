import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { axiosClient } from "@/api/axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define your schema using Zod
const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email is too short" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export default function ReaderLogin() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "boum6594@gmail.com",
      password: "12345678",
    },
  });

  // Define a submit handler
  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await axiosClient.post("/login", values);
      console.log("Submitting Form:", values, response.data);
      
      setSuccess(true);
      alert("🎉 Login Successful!");
      console.log("✅ Form Submitted:", values);
      form.reset({ email: "", password: "" });
    } catch (error) {
      console.error("Login Failed:", error.response?.data || error.message);
      alert("❌ Login Failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Login to Your Account</h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your email" 
                      {...field} 
                      className="w-full p-2 border rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                      className="w-full p-2 border rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className={`w-full py-2 rounded-lg text-white font-medium transition-all ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Login"}
            </Button>

            {/* Success Message */}
            {success && (
              <p className="text-green-600 text-center mt-2 font-medium">✅ Login Successful!</p>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}