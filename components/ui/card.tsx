import * as React from 'react'
import { Linkedin, Github, Globe, Download } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-lg transition-all duration-300',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold text-lg', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm leading-relaxed', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

// Enhanced Social Card Component
interface SocialLinks {
  linkedin?: string
  github?: string
  portfolio?: string
  resume?: string
}

interface SocialCardProps extends React.ComponentProps<'div'> {
  name: string
  role: string
  image?: string
  description?: string
  socialLinks: SocialLinks
}

function SocialCard({
  className,
  name,
  role,
  image,
  description,
  socialLinks,
  ...props
}: SocialCardProps) {
  return (
    <div
      className={cn(
        'group relative bg-card text-card-foreground rounded-2xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1',
        className,
      )}
      {...props}
    >
      {/* Background Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Role Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
          {role}
        </div>

        {/* Name */}
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        )}

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 pt-2">
          {socialLinks.linkedin && (
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5] hover:bg-[#005885] text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0077B5]/25"
            >
              <Linkedin className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
              LinkedIn
            </Link>
          )}

          {socialLinks.github && (
            <Link
              href={socialLinks.github}
              target="_blank"
              className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-[#24292e] hover:bg-[#1a1e22] text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#24292e]/25"
            >
              <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
              GitHub
            </Link>
          )}

          {socialLinks.portfolio && (
            <Link
              href={socialLinks.portfolio}
              target="_blank"
              className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Globe className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
              Portfolio
            </Link>
          )}

          {socialLinks.resume && (
            <Link
              href={socialLinks.resume}
              download
              className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <Download className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
              Resume
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  SocialCard,
}
