

async function fetchAll() {
    const posts= await fetch('https://jsonplaceholder.typicode.com/posts');
    const user = await fetch('http://jsonplaceholder.typicode.com/users');
    const postsData=  await posts.json();
    const usersData = await user.json();


    usersData.forEach(arg=>(arg.website="http://"+arg.website))
    usersData.forEach(arg=>(arg.company=arg.company.name, delete arg.company.name))
    usersData.forEach(arg=>(arg.address=
        arg.address.street+", "+arg.address.city+", "+arg.address.suite , delete arg.address[""]))
    postsData.forEach(arg=>(arg.title_crop=arg.title.slice(0,20)+"..."))

    for(let i=0;i<200;i++){
        if(usersData['id']==postsData['userId']){
            usersData.posts=postsData;
        }
    }

    return usersData;
}

console.log(fetchAll());





