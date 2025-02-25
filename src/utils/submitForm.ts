interface FormSubmission {
  formType: 'campaign' | 'volunteer' | 'contact';
  data: Record<string, any>;
  timestamp: string;
}

export async function submitFormToWebhook(formData: FormSubmission) {
  console.log('Submitting form data:', formData);

  try {
    const response = await fetch('https://hook.eu2.make.com/26vpxhrjwh85ruiv4q4ogl7druq94d4y', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData: formData.data,
        formType: formData.formType,
        timestamp: new Date().toISOString(),
        metadata: {
          userAgent: navigator.userAgent,
          pageUrl: window.location.href,
          submitTime: new Date().toISOString(),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      })
    });

    console.log('Response status:', response.status);
    return true;
  } catch (error) {
    console.error('Error sending form:', error);
    return false;
  }
} 