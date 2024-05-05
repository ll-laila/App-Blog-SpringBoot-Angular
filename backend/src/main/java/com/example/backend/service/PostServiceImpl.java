package com.example.backend.service;

import com.example.backend.entity.Post;
import com.example.backend.repositoy.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.management.relation.RelationNotFoundException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;


    @Override
    public Post savePost(Post post) {

        post.setLikeCount(0);
        post.setViewCount(0);
        post.setDate(new Date());
        return postRepository.save(post);
    }

    @Override
    public  List<Post> AllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Post getPost(Long postId){
        Optional<Post> optionalPost = postRepository.findById(postId);
        if(optionalPost.isPresent()){
            Post post = optionalPost.get();
            post.setViewCount(post.getViewCount() + 1);
            return postRepository.save(post);
        }else{
           throw new EntityNotFoundException("Post not found");
        }
    }


    @Override
    public void likePost(Long postId){
        Optional<Post> optionalPost = postRepository.findById(postId);
        if(optionalPost.isPresent()){
            Post post = optionalPost.get();
            post.setLikeCount(post.getLikeCount() + 1);
             postRepository.save(post);
        }else{
            throw new EntityNotFoundException("Post not found with id: "+postId);
        }
    }

    @Override
    public List<Post> searchByName(String name){
        return postRepository.findAllByNameContaining(name);
    }

}
