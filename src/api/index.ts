import axios from 'axios';
import { Skill, Experience, Project, BlogPost, SocialLink, MessageWelcome } from '../types';
import { skills, experiences, projects, blogPosts, socialLink, messageWelcome } from '../data';

// Base API URL - replace with your actual API endpoint when available
const API_BASE_URL = import.meta.env.VITE_API_URL;

// Fallback functions that return mock data
const getFallbackSkills = (code?: String): Promise<Skill[]> => {
  return Promise.resolve(skills.filter(skill => skill.language === code));
};

const getFallbackExperiences = (code: String): Promise<Experience[]> => {
  return Promise.resolve(experiences.filter(experience => experience.language === code));
};

const getFallbackProjects = (code: String): Promise<Project[]> => {
  return Promise.resolve(projects.filter(project => project.language === code));
};

const getFallbackBlogPosts = (code: String): Promise<BlogPost[]> => {
  return Promise.resolve(blogPosts.filter(blogPost => blogPost.language === code));
};

const getFallbackMessageWelcome = (): Promise<MessageWelcome> => {
  return Promise.resolve(messageWelcome);
};

const getFallbackSocialLinks = (code?: String): Promise<SocialLink[]> => {
  return Promise.resolve(socialLink.filter(socialLink => socialLink.language === code));
}

// API functions with fallback to mock data
export const getSkills = async (code: String): Promise<Skill[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/info/skill`, {
      params: {
        language: code
      }
    });
    if (response.status !== 200) {
      throw new Error('Failed to fetch skills data');
    }
    return response.data
  } catch (error) {
    console.log('Using fallback skills data');
    return getFallbackSkills(code);
  }
};

export const getExperiences = async (code: String): Promise<Experience[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/info/experience`, {
      params: {
        language: code
      }
    });
    if (response.status !== 200) {
      throw new Error('Failed to fetch skills data');
    }
    return response.data
  } catch (error) {
    console.log('Using fallback experiences data');
    return getFallbackExperiences(code);
  }
};

export const getProjects = async (code: String): Promise<Project[]> => {
  try {
    /* const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data;*/
    return getFallbackProjects(code);
  } catch (error) {
    console.log('Using fallback projects data');
    return getFallbackProjects(code);
  }
};

export const getBlogPosts = async (code: String): Promise<BlogPost[]> => {
  try {
    /* const response = await axios.get(`${API_BASE_URL}/blog-posts`);
    return response.data; */
    return getFallbackBlogPosts(code);
  } catch (error) {
    console.log('Using fallback blog posts data');
    return getFallbackBlogPosts(code);
  }
};

export const getSocialLinks = async (code: String): Promise<SocialLink[]> => {
  try {
    /* const response = await axios.get(`${API_BASE_URL}/blog-posts`);
    return response.data; */
    return getFallbackSocialLinks(code);
  } catch (error) {
    console.log('Using fallback social links data');
    return getFallbackSocialLinks(code);
  }
}

export const getMessageWelcome = async (): Promise<MessageWelcome> => {
  try {
    /* const response = await axios.get(`${API_BASE_URL}/message-welcome`);
    return response.data; */
    return getFallbackMessageWelcome();
  } catch (error) {
    console.log('Using fallback message welcome data');
    return getFallbackMessageWelcome();
  }
};
