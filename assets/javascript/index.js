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
        const user = data
            .map(users=>{
                return `
                    
                        <div class = "profile__container">
                            <div class = "profile__picture"><img src = "../assets/images/profile.jpg"/></div>

                            <div class = "paragraph">
                                <p> 
                                    <h4> Name:</h4> 
                                    <h5>${users.name}</h5> 
                                </p>
                                <p> 
                                    <h4>Username:</h4> 
                                    <h5>${users.username}</h5>
                                </p>
                                <p> 
                                    <h4> CatchPhrase: </h4> 
                                    <h5>${users.company.catchPhrase}</h5>
                                </p>
                                
                                    
                                
                            </div>
                        </div>
                        
                    
                    <hr/>
                `;
            })
            .join("");
        mainContainer.insertAdjacentHTML('afterbegin', user)
    }
}())
