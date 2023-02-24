# 14 Write Test cases for Delete method : 

import { Component } from '@angular/core';
import { of } from 'rxjs';
import { FifthComponent } from './fifth.component';
import { Post } from './model/posts.model';
describe("Posts Component", ()=>{
    let Posts : Post[];
    // post should initialize before everything
    //let component = new FifthComponent();
    let mockPostService : any;
    let component : any;
    beforeEach(()=>{
        Posts = [
            {id : 1, body : "body 1", title: "title 1"},
            {id : 2, body : "body 2", title: "title 2"},
            {id : 3, body : "body 3", title: "title 3"},
    ];

    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePposts']);
    component = new FifthComponent(mockPostService);
    });

    // check the delete method once.
    describe('delete method', ()=>{
        xit('should delete particular post from the Posts[]', ()=>{
            mockPostService.deletePposts.and.returnValue(of(true));
            component.posts = Posts;
            component.delete(Posts[1]); //check
            expect(component.posts.lenght).toBe(2);
        });

        xit('should delete be called ony once.', ()=>{
            mockPostService.deletePposts.and.returnValue(of(true));
            component.posts = Posts;
            component.delete(Posts[1]); //check
            expect(component.delete.post).toHaveBeenCalledTimes(1);
        });

        xit('should delete the selected post only and not other post', ()=>{
            mockPostService.deletePposts.and.returnValue(of(true));
            component.posts = Posts;
            component.delete(Posts[1]); //check
            for(let post of component.posts){
                expect(post).not.toEqual(Posts[1]);
            }
        })
    })

})

#
