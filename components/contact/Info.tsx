import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { contactInfo } from "@/data/contact";
import { getIcon } from "./LeftSide";

export function Info() {
  return (
    <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle>Contact Info</CardTitle>
            <CardDescription>
              Feel free to reach out through any channel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {getIcon(info.iconName)}
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {info.label}
                  </div>
                  <div className="text-sm font-medium">{info.value}</div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
  )
}