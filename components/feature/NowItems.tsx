"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { currentFocus } from "@/data/now";
import { motion } from "framer-motion";
import { DotIcon } from "lucide-react";
import { GlowHoverItem } from "../smoothui/glow-hover-card";

export default function NowItems() {
  const items: GlowHoverItem[] = [
    {
      id: "current-focus",
      element: (
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="text-xl">What I&apos;m Focusing On</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {currentFocus[0].items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary">
                    <DotIcon className="w-6 h-6" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "what-im-learning",
      element: (
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="text-xl">What I&apos;m Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {currentFocus[1].items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary">
                    <DotIcon className="w-6 h-6" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "what-im-next",
      element: (
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="text-xl">What I&apos;m Next</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {currentFocus[2].items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary">
                    <DotIcon className="w-6 h-6" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-10">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {item.element}
        </motion.div>
      ))}
    </div>
  );
}
