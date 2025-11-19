import { User } from "@/lib/types";
import { cacheLife } from "next/cache";

const API_URL = 'https://691de250d58e64bf0d3814da.mockapi.io/api/v1/user';

export async function getUsers(): Promise<User[]> {
  'use cache'
  cacheLife('minutes')

  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}
