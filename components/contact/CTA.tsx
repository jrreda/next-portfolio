import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Mail } from "lucide-react";

export function CTA() {
  return (
    <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card className="bg-linear-to-r from-primary/10 to-accent/30 border-primary/20">
          <CardContent className="p-6 text-center">
            <motion.div
              className="text-4xl mb-3"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              💬
            </motion.div>
            <h3 className="font-bold mb-2">Let&apos;s Chat!</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Available for freelance work and full-time positions
            </p>
            <motion.a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              Send Quick Email
            </motion.a>
          </CardContent>
        </Card>
      </motion.div>
  )
}