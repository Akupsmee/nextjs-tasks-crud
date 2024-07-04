import { NextResponse } from "next/server"

export default middleware = (request) => {
  return NextResponse.redirect(new URL('/', request.url));
}


export const config = {
  matcher: ["/about/:path*"]

}