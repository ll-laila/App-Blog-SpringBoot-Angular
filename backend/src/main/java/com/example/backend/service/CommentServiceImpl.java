package com.example.backend.service;

import com.example.backend.entity.Comment;
import com.example.backend.entity.Post;
import com.example.backend.repositoy.CommentRepository;
import com.example.backend.repositoy.PostRepository;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;


    @Override
    public Comment createComment(Long postId, String postedBy, String content){
        Optional<Post> optionalPost = postRepository.findById(postId);
        if(optionalPost.isPresent()){
            Comment comment = new Comment();

            comment.setPost(optionalPost.get());
            comment.setContent(content);
            comment.setPostedBy(postedBy);
            comment.setCreatedAt(new Date());

            return commentRepository.save(comment);
        }
       throw new EntityNotFoundException("Post not found");
    }


    @Override
    public List<Comment> getCommentsByPostId(Long postId){
        return commentRepository.findByPostId(postId);
    }


}
