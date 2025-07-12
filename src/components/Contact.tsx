"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email" }),
  name: z.string().min(1, { message: "Name is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("🎉Email sent succesfully!");
        form.reset();
      } else {
        toast.error("❌ Failed to send Email.");
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-[400px] flex flex-col md:flex-row justify-center items-center gap-10 bg-white text-black px-4">
      {/* Left: Form Section */}
      <section className="flex flex-col justify-center items-center px-6 md:px-12 py-12 space-y-6">
        <div className="w-full max-w-md space-y-4">
          <h1 className="text-4xl font-bold">Let&apos;s connect!</h1>
          <p className="text-muted-foreground">I&apos;m currently looking for new opportunities. My inbox is always open — feel free to reach out!</p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Charles" {...field} />
                    </FormControl>
                    <FormDescription>So I know who I’m chatting with 😊</FormDescription>
                    <FormMessage />
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
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormDescription>I&apos;ll use this to reply to you. Make sure it’s active!</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Send me a message" {...field} className="min-h-[120px]" />
                    </FormControl>
                    <FormDescription>Feel free to ask anything or just say hi 👋</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </section>

      {/* Right: Illustration Section */}
      <section className="flex flex-col justify-center items-center px-6 py-12 h-[540px] bg-[#abf7b6] rounded-xl">
        <div className="max-w-md">
          <Image
            src="/email.svg" // <- replace this with your actual image
            alt="Contact illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <p className="text-center mt-6 text-lg font-medium">
            Let&apos;s make something great together. <br /> Start by saying <span className="font-semibold">hello 👋</span>
          </p>
        </div>
      </section>
    </main>
  );
}
