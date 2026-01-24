import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { getIcon } from './LeftSide'
import { contactMethods } from '@/data/contact'

export default function Social() {
  return (
    <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Connect With Me</CardTitle>
            <CardDescription>
              Follow me on social media
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-xl border-2 ${method.borderColor} hover:shadow-lg transition-all`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`p-2 rounded-lg ${method.color}`}>
                  {getIcon(method.iconName)}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{method.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {method.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </CardContent>
        </Card>
      </motion.div>
  )
}
