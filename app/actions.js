'use server';
  
import { prisma } from "@/lib/prisma";

export default async function createUser(data) {
 const name = data.name;
 const email = data.email;
 const phone = data.phone;
 const password = data.password;

  await prisma.user.create({
    data: {
      name,
      phone,
      email,
      password,
    },
  });
}




