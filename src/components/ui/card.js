import React from 'react';

export function Card({ className, ...props }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg ${className || ''}`}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return (
    <div
      className={`p-6 pb-3 ${className || ''}`}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={`text-2xl font-bold ${className || ''}`}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return (
    <div
      className={`p-6 pt-3 ${className || ''}`}
      {...props}
    />
  );
} 