import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Upload, X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
    idProof: null as File | null,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, idProof: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text">
            Login to Seva Sahayog Foundation
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-foreground font-medium">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              className="w-full transition-all duration-300 focus:ring-primary"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full transition-all duration-300 focus:ring-primary"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="space-y-2">
            <Label htmlFor="role" className="text-foreground font-medium">
              Select Your Role
            </Label>
            <Select onValueChange={(value) => handleInputChange("role", value)} required>
              <SelectTrigger className="w-full transition-all duration-300 focus:ring-primary">
                <SelectValue placeholder="Choose your role" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-border">
                <SelectItem value="donor" className="hover:bg-muted cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-medium">Donor</span>
                    <span className="text-sm text-muted-foreground">Help others by donating</span>
                  </div>
                </SelectItem>
                <SelectItem value="receiver" className="hover:bg-muted cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-medium">Receiver</span>
                    <span className="text-sm text-muted-foreground">Receive help from the community</span>
                  </div>
                </SelectItem>
                <SelectItem value="admin" className="hover:bg-muted cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-medium">Admin</span>
                    <span className="text-sm text-muted-foreground">Manage and oversee operations</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* ID Proof Upload (only for receivers) */}
          {formData.role === "receiver" && (
            <div className="space-y-2">
              <Label htmlFor="idProof" className="text-foreground font-medium">
                ID Proof Document
              </Label>
              <div className="border-2 border-dashed border-border rounded-lg p-4 transition-all duration-300 hover:border-primary">
                <input
                  id="idProof"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  required={formData.role === "receiver"}
                />
                <label
                  htmlFor="idProof"
                  className="flex flex-col items-center justify-center cursor-pointer space-y-2"
                >
                  <Upload className="w-8 h-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground text-center">
                    {formData.idProof
                      ? formData.idProof.name
                      : "Click to upload ID proof (PDF, Image, or Document)"}
                  </span>
                </label>
              </div>
              {formData.idProof && (
                <div className="flex items-center justify-between bg-muted p-2 rounded-md">
                  <span className="text-sm text-foreground truncate">
                    {formData.idProof.name}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setFormData(prev => ({ ...prev, idProof: null }))}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="default"
            className="w-full h-12 text-lg font-semibold"
          >
            Create Account
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;