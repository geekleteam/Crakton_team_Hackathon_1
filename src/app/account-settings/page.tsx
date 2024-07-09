"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react"; // Assuming you have an ArrowLeft icon component

function AccountSetting() {
  const [deleteAllChat, setDeleteAllChat] = useState(false);

  return (
    <div className="p-16">
      <nav className="sticky w-full top-0 z-10 bg-slate-950 justify-between items-center p-1">
      <div className="flex items-center pb-7 sticky top-0 bg-slate-950">
          <Button  variant={"ghost"} type="button" 
          className="pl-0 text-[#717788]"
        //   onClick={}
          >
            <ChevronLeft size={17} /> Back
          </Button>
        </div>


        <div className="border-b pb-4 max-w-full md:max-w-[calc(100%-300px)]">
          <p className="flex space-x-2 items-center text-xl">Settings</p>
          <p className="flex space-x-2 items-center text-[#717788] text-sm mt-1">
            Manage your account settings & preferences
          </p>
        </div>
        {/* main content */}
        <div className="h-full grid gap-2 p-1 md:grid-cols-12 mt-8">
          <div className="col-span-12 md:col-span-3">
            Personalization
          </div>

          {/* Form content */}
          <div className="col-span-12 md:col-span-6">
            <form className="space-y-4">
              {/* Display Name */}
              <div className="flex flex-col mb-8">
                <div className='rounded-md border border-input p-4'>
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    type="text"
                    placeholder="Enter your display name"
                    className="w-full mt-4"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col mb-8">
                <div className='rounded-md border border-input p-4'>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mt-4"
                  />
                </div>
              </div>

              {/* About */}
              <div className="flex flex-col mb-8">
                <div className='rounded-md border border-input p-4'>
                  <Label htmlFor="about">About</Label>
                  <Textarea
                    id="about"
                    placeholder="Tell us about yourself"
                    className="w-full mt-4"
                  />
                </div>
              </div>

              {/* Profile Picture */}
              <div className="flex flex-col mb-8">
                <div className='rounded-md border border-input p-4'>
                  <Label htmlFor="profilePicture">Profile Picture</Label>
                  <Input
                    id="profilePicture"
                    type="file"
                    accept="image/*"
                    className="w-full mt-4 cursor-pointer"
                  />
                </div>
              </div>

              {/* Delete All Chat */}
              <div className="flex flex-col mb-8">
                <div className='flex flex-col rounded-md border border-input p-4'>
                    <Label htmlFor="deleteAllChat">Delete All Chat</Label>
                    <Switch
                    className="mt-4"
                    id="deleteAllChat"
                    checked={deleteAllChat}
                    onChange={() => setDeleteAllChat(!deleteAllChat)}
                    />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button type="submit">Save Settings</Button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AccountSetting