package com.example.backend.service;

import com.example.backend.entity.Post;

import java.util.List;

public interface PostService {


    Post savePost(Post post);

    List<Post> AllPosts();

    Post getPost(Long postId);

     void likePost(Long postId);

    List<Post> searchByName(String name);
}
