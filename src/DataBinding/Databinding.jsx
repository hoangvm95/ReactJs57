import React, { Component } from 'react'

export default class Databinding extends Component {

    prod = {
        id:1,
        name:'GLC-300'
    }

    renderTitle =() =>{
        let kq = 'Leo';
        return <div>
            {kq} - {this.prod.name}
        </div>
        //Có thể return về String, numbể, null, boolean hoặc jsx (Không thể binding object)
    }

    render() {
        let title = "Cybersoft";
        let person = {
            id: 1,
            name: 'Hoàng',
            img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1bb1a93-b8d4-4a52-850e-963db1b52f3f/d1l2886-c9e77613-6d47-4965-bfb2-9e2b672b1c64.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxYmIxYTkzLWI4ZDQtNGE1Mi04NTBlLTk2M2RiMWI1MmYzZlwvZDFsMjg4Ni1jOWU3NzYxMy02ZDQ3LTQ5NjUtYmZiMi05ZTJiNjcyYjFjNjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Nvi1upscxOwxBUvW301a_WR7yIBmbtxCkxxsLuNjLm4',
            age: 30
        }
        return (
            <div classname="container">
                <h3>Databinding</h3>
                <p>{this.renderTitle()}</p>
                <p id="txt">{title}</p>
                <div classname="card">
                    <img classname="card-img-top" src={person.img} alt="Title" />
                    <div classname="card-body">
                        <h4 classname="card-title">{person.name}</h4>
                        <p classname="card-text">{person.age}</p>
                    </div>
                </div>
            </div>


        )
    }
}
