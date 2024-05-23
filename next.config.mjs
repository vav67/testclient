/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        //   domains:['res.cloudinary.com','randomuser.me'],
        remotePatterns: [
         {
           protocol: 'https',
           hostname: 'res.cloudinary.com',
           pathname: '**',
         },
          
           {
             protocol: 'https',
             hostname: 'randomuser.me',
             pathname: '**',
           },
           
           {
             protocol: 'https',
             hostname: 'nlmserver.vercel.app',
             pathname: '**',
           },     
       ],
         },
         //в исходнике
// experimental:{
//   reactRoot:true,
//   suppressHydrationWarning: true,
// }



};

export default nextConfig;
