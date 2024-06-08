"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-8 bg-white rounded-2xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-9xl font-bold text-gray-700">404</h2>
          <p className="mt-4 text-2xl text-gray-700">Oops! Page not found.</p>
          <p className="mt-2 text-gray-500">
            We can&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-6">
            <Button
              variant="contained"
              disableElevation
              color="info"
              onClick={() => router.push("/")}
            >
              Go Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
