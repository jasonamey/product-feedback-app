data.productRequests.forEach((item) => {
  let numberOfComments = item.comments ? item.comments.length : 0;

  db.collection("productRequests")
    .add({
      dataId: item.id,
      title: item.title,
      category: item.category,
      upvotes: item.upvotes,
      status: item.status,
      description: item.description,
      numberOfComments,
    })
    .then((docRef) => {
      if (item.comments) {
        item.comments.forEach((comment) => {
          const { username, name, image } = comment.user;
          let repliesArray = [];
          if (comment.replies) {
            comment.replies.forEach((reply) => {
              const { content, replyingTo, user } = reply;
              repliesArray.push({ content, replyingTo, user });
            });
          }
          db.collection(`productRequests/${docRef.id}/comments`).add({
            dataId: comment.id,
            content: comment.content,
            user: { image, name, username },
            replies: [...repliesArray],
          });
        });
      }
    });
});

//DATA FROM FRONTENDMENTOR :

// const feedback = {
//   feedbackId,
//   text: "",
//   comments: [],
//   authorId: "",
//   votes: 0,
//   tags: [],
// };

// const comment = {
//   commentId: "",
//   authorId: "",
//   replies: [],
//   text: "",
// };

// const replies = {
//   replyId: "",
//   authorId: "",
//   text: "",
// };

// const users = {
//   userId: "",
//   name: "",
//   userName: "",
//   picURL: "",
// };

// import db from "./utils/firebase";

// productRequests.forEach((item) => {
//   db.collection("productRequests").add({
//     title: item.title,
//     category: item.category,
//     upvotes: item.upvotes,
//     status: item.suggestion,
//     description: item.descption,
//   });
// });

// db.collection("productRequests");

const data = {
  currentUser: {
    image:
      "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-zena.jpg?alt=media&token=19eeac3a-e361-4905-a466-d0e1f3ca239a",
    name: "Zena Kelley",
    username: "velvetround",
  },
  productRequests: [
    {
      id: 1,
      title: "Add tags for solutions",
      category: "enhancement",
      upvotes: 112,
      status: "suggestion",
      description: "Easier to search for solutions based on a specific stack.",
      comments: [
        {
          id: 1,
          content:
            "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-suzanne.jpg?alt=media&token=172eebee-b8c0-47cc-aab4-eaf11762e4f8",
            name: "Suzanne Chang",
            username: "upbeat1811",
          },
        },
        {
          id: 2,
          content:
            "Please use fun, color-coded labels to easily identify them at a glance",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-thomas.jpg?alt=media&token=b8442b35-71f0-4f1b-89b5-a4e73a7416aa",
            name: "Thomas Hood",
            username: "brawnybrave",
          },
        },
      ],
    },
    {
      id: 2,
      title: "Add a dark theme option",
      category: "feature",
      upvotes: 99,
      status: "suggestion",
      description:
        "It would help people with light sensitivities and who prefer dark mode.",
      comments: [
        {
          id: 3,
          content:
            "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-elijah.jpg?alt=media&token=3711b650-8311-4b92-8868-f077a424fc0d",
            name: "Elijah Moss",
            username: "hexagon.bestagon",
          },
        },
        {
          id: 4,
          content:
            "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-james.jpg?alt=media&token=66eae0a3-d890-441a-b67d-a640d2f074e0",
            name: "James Skinner",
            username: "hummingbird1",
          },
          replies: [
            {
              content:
                "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
              replyingTo: "hummingbird1",
              user: {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-anne.jpg?alt=media&token=9111ac98-c4a5-41b2-bbfc-d396abcbeb1e",
                name: "Anne Valentine",
                username: "annev1990",
              },
            },
            {
              content:
                "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
              replyingTo: "annev1990",
              user: {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-ryan.jpg?alt=media&token=2eb4181f-10ee-48e8-81a9-e23e0342a5ad",
                name: "Ryan Welles",
                username: "voyager.344",
              },
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Q&A within the challenge hubs",
      category: "feature",
      upvotes: 65,
      status: "suggestion",
      description: "Challenge-specific Q&A would make for easy reference.",
      comments: [
        {
          id: 5,
          content:
            "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-ryan.jpg?alt=media&token=2eb4181f-10ee-48e8-81a9-e23e0342a5ad",
            name: "George Partridge",
            username: "soccerviewer8",
          },
        },
      ],
    },
    {
      id: 4,
      title: "Add image/video upload to feedback",
      category: "enhancement",
      upvotes: 51,
      status: "suggestion",
      description: "Images and screencasts can enhance comments on solutions.",
      comments: [
        {
          id: 6,
          content:
            "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
          user: {
            image: "./assets/user-images/image-javier.jpg",
            name: "Javier Pollard",
            username: "warlikeduke",
          },
        },
        {
          id: 7,
          content:
            "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
          user: {
            image: "./assets/user-images/image-roxanne.jpg",
            name: "Roxanne Travis",
            username: "peppersprime32",
          },
        },
      ],
    },
    {
      id: 5,
      title: "Ability to follow others",
      category: "feature",
      upvotes: 42,
      status: "suggestion",
      description: "Stay updated on comments and solutions other people post.",
      comments: [
        {
          id: 8,
          content:
            "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-victoria.jpg?alt=media&token=8482c8f8-0b55-4f48-ab18-d10333b98863",
            name: "Victoria Mejia",
            username: "arlen_the_marlin",
          },
          replies: [
            {
              content:
                "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
              replyingTo: "arlen_the_marlin",
              user: {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-zena.jpg?alt=media&token=19eeac3a-e361-4905-a466-d0e1f3ca239a",
                name: "Zena Kelley",
                username: "velvetround",
              },
            },
          ],
        },
        {
          id: 9,
          content:
            "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-jackson.jpg?alt=media&token=2f8f36a1-54db-4846-b71b-efd5bae7e8f4",
            name: "Jackson Barker",
            username: "countryspirit",
          },
        },
      ],
    },
    {
      id: 6,
      title: "Preview images not loading",
      category: "bug",
      upvotes: 3,
      status: "suggestion",
      description:
        "Challenge preview images are missing when you apply a filter.",
    },
    {
      id: 7,
      title: "More comprehensive reports",
      category: "feature",
      upvotes: 123,
      status: "planned",
      description:
        "It would be great to see a more detailed breakdown of solutions.",
      comments: [
        {
          id: 10,
          content:
            "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-victoria.jpg?alt=media&token=8482c8f8-0b55-4f48-ab18-d10333b98863",
            name: "Victoria Mejia",
            username: "arlen_the_marlin",
          },
        },
        {
          id: 11,
          content:
            "Yeah, this would be really good. I'd love to see deeper insights into my code!",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-jackson.jpg?alt=media&token=2f8f36a1-54db-4846-b71b-efd5bae7e8f4",
            name: "Jackson Barker",
            username: "countryspirit",
          },
        },
      ],
    },
    {
      id: 8,
      title: "Learning paths",
      category: "feature",
      upvotes: 28,
      status: "planned",
      description:
        "Sequenced projects for different goals to help people improve.",
      comments: [
        {
          id: 12,
          content:
            "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-ryan.jpg?alt=media&token=2eb4181f-10ee-48e8-81a9-e23e0342a5ad",
            name: "George Partridge",
            username: "soccerviewer8",
          },
        },
      ],
    },
    {
      id: 9,
      title: "One-click portfolio generation",
      category: "feature",
      upvotes: 62,
      status: "in-progress",
      description:
        "Add ability to create professional looking portfolio from profile.",
      comments: [
        {
          id: 13,
          content:
            "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-ryan.jpg?alt=media&token=2eb4181f-10ee-48e8-81a9-e23e0342a5ad",
            name: "Ryan Welles",
            username: "voyager.344",
          },
        },
      ],
    },
    {
      id: 10,
      title: "Bookmark challenges",
      category: "feature",
      upvotes: 31,
      status: "in-progress",
      description: "Be able to bookmark challenges to take later on.",
      comments: [
        {
          id: 14,
          content:
            "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-suzanne.jpg?alt=media&token=172eebee-b8c0-47cc-aab4-eaf11762e4f8",
            name: "Suzanne Chang",
            username: "upbeat1811",
          },
        },
      ],
    },
    {
      id: 11,
      title: "Animated solution screenshots",
      category: "bug",
      upvotes: 9,
      status: "in-progress",
      description:
        "Screenshots of solutions with animations don’t display correctly.",
    },
    {
      id: 12,
      title: "Add micro-interactions",
      category: "enhancement",
      upvotes: 71,
      status: "live",
      description: "Small animations at specific points can add delight.",
      comments: [
        {
          id: 15,
          content:
            "I'd love to see this! It always makes me so happy to see little details like these on websites.",
          user: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-victoria.jpg?alt=media&token=8482c8f8-0b55-4f48-ab18-d10333b98863",
            name: "Victoria Mejia",
            username: "arlen_the_marlin",
          },
          replies: [
            {
              content:
                "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
              replyingTo: "arlen_the_marlin",
              user: {
                image:
                  "https://firebasestorage.googleapis.com/v0/b/project-data-ja.appspot.com/o/product-feedback-app-profile-pics%2Fimage-suzanne.jpg?alt=media&token=172eebee-b8c0-47cc-aab4-eaf11762e4f8",
                name: "Suzanne Chang",
                username: "upbeat1811",
              },
            },
          ],
        },
      ],
    },
  ],
};
