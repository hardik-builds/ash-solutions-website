// app/api/auth/logout/route.js
export const dynamic = 'force-dynamic';

export async function POST() {
  const cookieString = 'token=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT';

  return new Response(JSON.stringify({ success: true, message: 'Logged out successfully' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': cookieString,
    },
  });
}
