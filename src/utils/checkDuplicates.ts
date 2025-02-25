interface CheckDuplicateResponse {
  exists: boolean;
  field?: 'email' | 'phone';
}

export async function checkDuplicateRegistration(email: string, phone: string): Promise<CheckDuplicateResponse> {
  try {
    const response = await fetch('https://hook.eu2.make.com/26vpxhrjwh85ruiv4q4ogl7druq94d4y', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'checkDuplicate',
        email,
        phone
      })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error checking duplicates:', error);
    return { exists: false };
  }
} 