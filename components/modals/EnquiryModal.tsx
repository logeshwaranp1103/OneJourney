"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { mockPackages } from "@/data/packages";
import { X, Calendar, Users, HeartHandshake, Phone, Mail, User, ShieldCheck, MapPin } from "lucide-react";
import { easeQuint } from "@/lib/animations";
import { toast } from "sonner";

export default function EnquiryModal() {
  const { isEnquireOpen, setEnquireOpen, enquirePackageId } = useApp();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    destination: "",
    travelMonth: "",
    adultsCount: "2",
    seniorsCount: "0",
    hasWheelchair: false,
    hasVegMeals: true,
    hasGroundFloor: false,
    hasMedicalSupport: false,
    fullName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const selectedPackage = mockPackages.find((p) => p.id === enquirePackageId);

  // Load drafts from LocalStorage
  useEffect(() => {
    if (isEnquireOpen) {
      try {
        const savedDraft = localStorage.getItem("dharmayatra_enquiry_draft");
        if (savedDraft) {
          setFormData((prev) => ({ ...prev, ...JSON.parse(savedDraft) }));
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [isEnquireOpen]);

  // Set destination if package is selected
  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({
        ...prev,
        destination: selectedPackage.title,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        destination: "",
      }));
    }
    setStep(1);
    setIsSuccess(false);
  }, [selectedPackage, isEnquireOpen]);

  // Save drafts on change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    localStorage.setItem("dharmayatra_enquiry_draft", JSON.stringify(updated));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    const updated = { ...formData, [name]: checked };
    setFormData(updated);
    localStorage.setItem("dharmayatra_enquiry_draft", JSON.stringify(updated));
  };

  const validateStep = (currentStep: number) => {
    if (currentStep === 1) {
      if (!formData.destination) {
        toast.error("Please enter or select a destination.");
        return false;
      }
      if (!formData.travelMonth) {
        toast.error("Please select your preferred travel month.");
        return false;
      }
    } else if (currentStep === 2) {
      const adults = parseInt(formData.adultsCount) || 0;
      const seniors = parseInt(formData.seniorsCount) || 0;
      if (adults === 0 && seniors === 0) {
        toast.error("Please specify at least 1 traveller.");
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.fullName.trim()) {
        toast.error("Please enter your full name.");
        return false;
      }
      if (!formData.email.trim() || !formData.email.includes("@")) {
        toast.error("Please enter a valid email address.");
        return false;
      }
      if (!formData.phone.trim() || formData.phone.length < 8) {
        toast.error("Please enter a valid phone number.");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((s) => s + 1);
    }
  };

  const handlePrev = () => {
    setStep((s) => Math.max(1, s - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Enquiry request submitted successfully!");
    
    // Clear LocalStorage drafts
    localStorage.removeItem("dharmayatra_enquiry_draft");
  };

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isEnquireOpen) {
        setEnquireOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isEnquireOpen, setEnquireOpen]);

  return (
    <AnimatePresence>
      {isEnquireOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnquireOpen(false)}
            className="fixed inset-0 bg-[#041F35] z-50 backdrop-blur-md mix-blend-multiply"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: easeQuint }}
            className="fixed inset-x-margin-mobile md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 max-w-xl w-full bg-surface-container-lowest rounded-2xl shadow-level-2 border border-outline-variant/10 z-50 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-primary text-on-primary p-6 flex justify-between items-center relative select-none">
              <div>
                <h3 id="enquiry-modal-title" className="font-headline-lg font-semibold text-lg font-display">
                  {selectedPackage ? `Enquire for ${selectedPackage.title}` : "Plan Your Sacred Journey"}
                </h3>
                <p className="text-primary-fixed/80 text-xs mt-1">
                  Step {step} of 3 • Custom Multigenerational Stays
                </p>
              </div>
              <button
                onClick={() => setEnquireOpen(false)}
                className="text-on-primary/80 hover:text-on-primary hover:bg-white/10 rounded-full p-2 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Step Progress Bar */}
            <div className="w-full bg-surface-container-low h-1.5 relative">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-secondary"
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Form Body */}
            <div className="p-6 overflow-y-auto flex-grow">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  /* Success Screen */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <div className="w-20 h-20 bg-tertiary-container/30 text-tertiary rounded-full flex items-center justify-center shadow-sm">
                      <ShieldCheck size={48} className="animate-bounce" />
                    </div>
                    <h4 className="font-headline-lg text-primary text-xl font-bold font-display">
                      Yatra Enquiry Submitted!
                    </h4>
                    <p className="text-on-surface-variant font-body-sm text-sm max-w-sm">
                      Thank you for contacting OneJourney. A dedicated elder-care guide will call you within 2 hours to curate your customized sacred itinerary.
                    </p>
                    <button
                      onClick={() => setEnquireOpen(false)}
                      className="mt-6 bg-primary text-on-primary font-bold px-8 py-3 rounded-lg hover:bg-primary-container transition-all"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {step === 1 && (
                      /* Step 1: Destination & Month */
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <h4 className="font-label-bold text-primary flex items-center gap-2">
                          <MapPin size={18} className="text-secondary" />
                          Destination & Preferences
                        </h4>

                        {/* Destination input */}
                        <div className="relative">
                          <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1.5">
                            Destination
                          </label>
                          <input
                            type="text"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            placeholder="Where would you like to travel?"
                            className="w-full bg-surface-container-low text-on-surface p-3.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                            disabled={!!selectedPackage}
                          />
                        </div>

                        {/* Months dropdown */}
                        <div className="relative">
                          <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1.5">
                            Preferred Month
                          </label>
                          <select
                            name="travelMonth"
                            value={formData.travelMonth}
                            onChange={handleChange}
                            className="w-full bg-surface-container-low text-on-surface p-3.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                          >
                            <option value="">Select Month</option>
                            <option value="october">October 2026</option>
                            <option value="november">November 2026</option>
                            <option value="december">December 2026</option>
                            <option value="january">January 2027</option>
                            <option value="february">February 2027</option>
                            <option value="march">March 2027</option>
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      /* Step 2: Passenger Count & Senior Care Options */
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-5"
                      >
                        <h4 className="font-label-bold text-primary flex items-center gap-2">
                          <Users size={18} className="text-secondary" />
                          Traveller Details
                        </h4>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1.5">
                              Adults (18-60)
                            </label>
                            <select
                              name="adultsCount"
                              value={formData.adultsCount}
                              onChange={handleChange}
                              className="w-full bg-surface-container-low p-3 rounded-lg border border-outline-variant focus:border-primary outline-none"
                            >
                              {[...Array(10)].map((_, i) => (
                                <option key={i} value={i}>
                                  {i} Adults
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1.5">
                              Seniors (60+)
                            </label>
                            <select
                              name="seniorsCount"
                              value={formData.seniorsCount}
                              onChange={handleChange}
                              className="w-full bg-surface-container-low p-3 rounded-lg border border-outline-variant focus:border-primary outline-none"
                            >
                              {[...Array(10)].map((_, i) => (
                                <option key={i} value={i}>
                                  {i} Seniors
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="border-t border-outline-variant/10 pt-4 space-y-3">
                          <label className="block text-xs font-bold uppercase tracking-wider text-outline flex items-center gap-1">
                            <HeartHandshake size={14} className="text-secondary" />
                            Special Elder Stays & Assistance (Optional)
                          </label>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label className="flex items-center gap-3 p-3 bg-surface-container rounded-lg border border-transparent hover:border-outline-variant/30 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={formData.hasWheelchair}
                                onChange={(e) => handleCheckboxChange("hasWheelchair", e.target.checked)}
                                className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant"
                              />
                              <span className="text-sm font-medium text-primary">Wheelchair Access</span>
                            </label>

                            <label className="flex items-center gap-3 p-3 bg-surface-container rounded-lg border border-transparent hover:border-outline-variant/30 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={formData.hasVegMeals}
                                onChange={(e) => handleCheckboxChange("hasVegMeals", e.target.checked)}
                                className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant"
                              />
                              <span className="text-sm font-medium text-primary">Pure Veg/Satvik meals</span>
                            </label>

                            <label className="flex items-center gap-3 p-3 bg-surface-container rounded-lg border border-transparent hover:border-outline-variant/30 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={formData.hasGroundFloor}
                                onChange={(e) => handleCheckboxChange("hasGroundFloor", e.target.checked)}
                                className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant"
                              />
                              <span className="text-sm font-medium text-primary">Ground Floor Rooms</span>
                            </label>

                            <label className="flex items-center gap-3 p-3 bg-surface-container rounded-lg border border-transparent hover:border-outline-variant/30 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={formData.hasMedicalSupport}
                                onChange={(e) => handleCheckboxChange("hasMedicalSupport", e.target.checked)}
                                className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant"
                              />
                              <span className="text-sm font-medium text-primary">On-call Medical kit</span>
                            </label>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      /* Step 3: Contact details */
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <h4 className="font-label-bold text-primary flex items-center gap-2">
                          <User size={18} className="text-secondary" />
                          Contact Information
                        </h4>

                        {/* Full Name */}
                        <div className="relative">
                          <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1">
                            Your Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Shri / Smt..."
                            className="w-full bg-surface-container-low p-3.5 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Email */}
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="name@gmail.com"
                              className="w-full bg-surface-container-low p-3 rounded-lg border border-outline-variant focus:border-primary outline-none"
                            />
                          </div>
                          {/* Phone */}
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 XXXXX XXXXX"
                              className="w-full bg-surface-container-low p-3 rounded-lg border border-outline-variant focus:border-primary outline-none"
                            />
                          </div>
                        </div>

                        {/* Special requests */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-outline mb-1">
                            Specific spiritual dates / medical needs / comments
                          </label>
                          <textarea
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Let us know any additional custom requests..."
                            className="w-full bg-surface-container-low p-3 rounded-lg border border-outline-variant focus:border-primary outline-none resize-none"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Footer Nav Controls */}
                    <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10 select-none">
                      {step > 1 ? (
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-surface-container-low transition-colors"
                        >
                          Back
                        </button>
                      ) : (
                        <div />
                      )}

                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:bg-primary-container transition-all"
                        >
                          Next Step
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-secondary text-on-secondary px-8 py-3 rounded-lg font-bold hover:bg-secondary-container transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-on-secondary border-t-transparent rounded-full animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            "Submit Enquiry"
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
