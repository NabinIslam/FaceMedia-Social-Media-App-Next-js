export { default } from 'next-auth/middleware';

export const config = { matcher: ['/'] };

// import { useSession } from 'next-auth/react';
// import { NextResponse } from 'next/server';

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   const { data: session } = useSession();

//   const path = request.nextUrl.pathname;

//   const isPublicPath = path === '/login' || path === '/register';

//   if (isPublicPath && session) {
//     return NextResponse.redirect(new URL('/', request.nextUrl));
//   }

//   if (!isPublicPath && !session) {
//     return NextResponse.redirect(new URL('/login', request.nextUrl));
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/', '/login', '/register'],
// };
