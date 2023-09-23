// Extract data From Request obj when post req is made

1. Array Buffer
    const arrBuff = await request.arrayBuffer();
    const buff = Buffer.from(arrBuff);
    console.log(buff.toString())

2. Text Blob
    const textBlob= await request.blob()
    console.log(await textBlob.text());

3. From Body
    const body= request.body;
    const reader = body?.getReader()
    const obj = await reader?.read()
    const buff = Buffer.from(obj?.value);
    console.log(buff.toString())

4. from Json()
    const json = await request.json();
    console.log(json);
    const data = request.bodyUsed;
    console.log(data);

5. request.bodyUsed :-> indicates wheater body is used or not
    return true or false -> in my case its only working with json() only
    const data= request.bodyUsed
    console.log(data);   //false


6. request.cache -> cache we can pass when we make request
    it represent the method of cahching if we dont define it then its default
        otherwise we can pass values like 
         no-store : always new fetch req
         reload : fetch req on reload
         no-cache: revalidate cache
         force-cache: always use cached response

         const data= request.cache
         console.log(data);  // default

7. request.clone() -> clone the request
      const data= request.clone()
      console.log(data);

8. request.credentials -> we can pass the credential behaviour during fetch request
        values we can pass :
        a. include : include credential and cookie in the req -> same or cross origin both
        b. same-origin : include credential and cookie in the req -> for same origin only
        c. omit : credentials should not be included with the request

9. request.destination ->  indicate the type of resource the request is intended 
        to fetch like '', 'audio', 'script', 'video'

10. request.formData(): read data if form data from the request
        const data = await request.formData()
        console.log(data);

11. request.headers : Print Headers
      const data = request.headers
      console.log(data);
        Headers {
        "user-agent": "PostmanRuntime/7.33.0",
        "accept": "*/*",
        "host": "localhost:5000",
        "accept-encoding": "gzip, deflate, br",
        "connection": "keep-alive",
        "content-type": "multipart/form-data; boundary=--------------------------517395084051039704876574",
        "content-length": "172",
        "postman-token": "27967f47-cca7-4b6c-bf75-39d6ae008b7a"
        }

12. request.mode : defines mode of request: 'navigate', 'cors', 'no-cors', 
        'same-origin', 'cors-with-forced-preflight'

13. request.keepalive:  boolean property if set true than the connection established  
         for this request should be kept open

14. request.redirect: is used to control how the browser should handle redirects for a
         fetch request :
         'follow': browser will follow redirect
         'error': browser will treat redirect as error
         'manual':  browser does not follow redirects automatically

15. request.refferer:  return the referrer of the request
        'no-referrer': no referrer will be sent
        'client': the referrer will be the URL of the document that initiated the fetch
        'about:client': the referrer will be the URL of the document that initiated the fetch
        const data = request.referrer
        console.log(data);

16. request.referrerPolicy:  specifies which referrer to send when fetching the request
        'no-referrer': no referrer will be sent
        'client': the referrer will be the URL of the document that initiated the fetch
        'about:client': the referrer will be the URL of the document that initiated the fetch
        const data = request.referrerPolicy
        console.log(data);

17. request.signal:  return the signal associated with request, which is an
        AbortSignal object indicating whether or not request has been aborted
        const data = request.signal
        console.log(data);

18. request.url:  return the url of the request as a string
        const data = request.url
        console.log(data);

19. request.method:  return the method of the request
        const data = request.method
        console.log(data);

20. request.text():  read data if text from the request
        const data = await request.text()
        console.log(data);