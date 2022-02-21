(function(){

    let userUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(userUrl, {
        method: 'GET',
    })
        .then(response => {return response.json()})
        .then(function(data){
        console.log(data)
        userProfile(data) 
        })


    function userProfile(data) {

        let mainContainer = document.getElementById('main__container');
        const users = data
            .map(user=>{
                return `
                    
                        <a href='second_page.html?user=${user.username}'>
                            <div class = "profile__container">
                                <div class = "profile__picture">
                                    <img src = "../assets/images/profile.jpg"/>
                                </div>

                                <div class = "paragraph">
                                    <p> 
                                        <h4> Name:</h4> 
                                        <h5>${user.name}</h5> 
                                    </p>
                                    <p> 
                                        <h4>Username:</h4> 
                                        <h5>${user.username}</h5>
                                    </p>
                                    <p> 
                                        <h4> CatchPhrase: </h4> 
                                        <h5>${user.company.catchPhrase}</h5>
                                    </p>
                                    
                                        
                                    
                                </div>
                            </div>
                            
                        </a>
                    
                    <hr/>
                `;
            })
            .join("");
        mainContainer.insertAdjacentHTML('afterbegin', users)

        // saving the data to localstorage
        localStorage.setItem('users',JSON.stringify(data))

        

        // document.location.href = userUrl
    }
}())
