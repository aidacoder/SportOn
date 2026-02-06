"use client"

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function AuthGuard({ children }: { children: React.ReactNode }) {

    const router =useRouter();
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const token=localStorage.getItem("token");
        if (!token){
            router.push("/admin/login")
        }else{
            setLoading(false)
        }
    } ,[router])

    if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}

export default AuthGuard;
