"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { submitSubscription, type SubscriptionData } from "@/app/actions/subscribe"
import { CheckCircle, Loader2 } from "lucide-react"

interface SubscriptionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SubscriptionModal({ open, onOpenChange }: SubscriptionModalProps) {
  const [formData, setFormData] = useState<SubscriptionData>({
    fullName: "",
    whatsappNumber: "",
    email: "",
    city: "",
    designation: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<SubscriptionData>>({})

  const validateForm = () => {
    const newErrors: Partial<SubscriptionData> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required"
    }
    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitSubscription(formData)

      if (result.success) {
        setIsSuccess(true)
        // Reset form
        setFormData({
          fullName: "",
          whatsappNumber: "",
          email: "",
          city: "",
          designation: "",
        })
        // Close modal and redirect after 2 seconds
        setTimeout(() => {
          setIsSuccess(false)
          onOpenChange(false)
          window.location.href = "/"
        }, 2000)
      } else {
        alert(result.message)
      }
    } catch (error) {
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof SubscriptionData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md bg-white">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thanks For Subscribing Us!</h2>
            <p className="text-gray-600">You will be redirected to the main page shortly...</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">Stay Updated With Us</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
              Full Name*
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter First & Last Name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className={`border-0 border-b-2 rounded-none px-0 focus-visible:ring-0 focus-visible:border-purple-500 ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsappNumber" className="text-sm font-medium text-gray-700">
              WhatsApp Number*
            </Label>
            <Input
              id="whatsappNumber"
              type="tel"
              placeholder="Enter WhatsApp Number"
              value={formData.whatsappNumber}
              onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
              className={`border-0 border-b-2 rounded-none px-0 focus-visible:ring-0 focus-visible:border-purple-500 ${
                errors.whatsappNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.whatsappNumber && <p className="text-sm text-red-500">{errors.whatsappNumber}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email*
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`border-0 border-b-2 rounded-none px-0 focus-visible:ring-0 focus-visible:border-purple-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-medium text-gray-700">
              City*
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="Enter City"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className={`border-0 border-b-2 rounded-none px-0 focus-visible:ring-0 focus-visible:border-purple-500 ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="designation" className="text-sm font-medium text-gray-700">
              Designation*
            </Label>
            <Select value={formData.designation} onValueChange={(value) => handleInputChange("designation", value)}>
              <SelectTrigger
                className={`border-0 border-b-2 rounded-none px-0 focus:ring-0 focus:border-purple-500 ${
                  errors.designation ? "border-red-500" : "border-gray-300"
                }`}
              >
                <SelectValue placeholder="Select Designation" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="software-engineer">Software Engineer</SelectItem>
                <SelectItem value="data-scientist">Data Scientist</SelectItem>
                <SelectItem value="product-manager">Product Manager</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                <SelectItem value="researcher">Researcher</SelectItem>
                <SelectItem value="consultant">Consultant</SelectItem>
                <SelectItem value="freelancer">Freelancer</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.designation && <p className="text-sm text-red-500">{errors.designation}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
