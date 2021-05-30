import React from 'react'

export const About = () => {
    let heading = {
        color: 'red',
        justifyContent: 'center',
        alignItem: 'center',
        textAlign: "center",
        marginTop: 40,
        marginBottom: 20
    }
    let para ={
        padding: 20,
        marginBottom:456
    }
    return (
        <div>
            <h3 style={heading}>This is my About Page</h3>
            <p style={para}>
                ToDo App is simple and awesome app to organize your tasks with very easy to use interface. ToDo can help you to make list of your tasks and also you can set Reminder with specific tasks. It reminds you at you specified Time.

                We believe that we only focus on our Today and Tomorrow tasks, which is most important. So we made user interface like that so that it can give you a quick view on your day timeline.

            </p>
        </div>
    )
}
