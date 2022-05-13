import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/user-slice";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import FeedBackPage from "./pages/FeedbackPage";
import HomePage from "./pages/HomePage";
import AddFeedBackPage from "./pages/AddFeedbackPage";
import RoadmapPage from "./pages/RoadmapPage";
// import db from "./utils/firebase";
import { auth, provider } from "./utils/firebase";
// import { data } from "./utils/helpers";

function App() {
  const authHandler = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const { displayName, email, uid, photoURL } = authUser;
        dispatch(
          login({
            displayName,
            email,
            id: uid,
            photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <AppWrapper>
      <GlobalStyles />
      <header>
        <button onClick={authHandler}>hello</button>
      </header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/feedback/:id">
          <FeedBackPage />
        </Route>
        <Route path="/submit-feedback">
          <AddFeedBackPage />
        </Route>
        <Route path="/roadmap">
          <RoadmapPage />
        </Route>
      </Switch>
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  margin: 0 auto;
  width: 80vw;
`;

export default App;

// data.productRequests.forEach((item) => {
//   db.collection("productRequests")
//     .add({
//       dataId: item.id,
//       title: item.title,
//       category: item.category,
//       upvotes: item.upvotes,
//       status: item.status,
//       description: item.description,
//     })
//     .then((docRef) => {
//       if (item.comments) {
//         item.comments.forEach((comment) => {
//           const { username, name, image } = comment.user;

//           db.collection(`productRequests/${docRef.id}/comments`)
//             .add({
//               dataId: comment.id,
//               content: comment.content,
//               user: { image, name, username },
//             })
//             .then((repliesDocRef) => {
//               if (comment.replies) {
//                 comment.replies.forEach((reply) => {
//                   const {
//                     username: rUsername,
//                     name: rName,
//                     image: rImage,
//                   } = reply.user;

//                   db.collection(
//                     `productRequests/${docRef.id}/comments/${repliesDocRef.id}/replies`
//                   ).add({
//                     content: reply.content,
//                     replyingTo: reply.replyingTo,
//                     user: {
//                       image: rImage,
//                       name: rName,
//                       username: rUsername,
//                     },
//                   });
//                 });
//               }
//             });
//         });
//       }
//     });
// });

// data.productRequests.forEach((item) => {
//   db.collection("productRequests")
//     .add({
//       dataId: item.id,
//       title: item.title,
//       category: item.category,
//       upvotes: item.upvotes,
//       status: item.status,
//       description: item.description,
//     })
//     .then((docRef) => {
//       if (item.comments) {
//         item.comments.forEach((comment) => {
//           const { username, name, image } = comment.user;
//           let repliesArray = [];
//           if (comment.replies) {
//             comment.replies.forEach((reply) => {
//               const { content, replyingTo, user } = reply;
//               repliesArray.push({ content, replyingTo, user });
//             });
//           }
//           db.collection(`productRequests/${docRef.id}/comments`).add({
//             dataId: comment.id,
//             content: comment.content,
//             user: { image, name, username },
//             replies: [...repliesArray],
//           });
//         });
//       }
//     });
// });

// menu.forEach(function(obj) {
//   db.collection("menu").add({
//       id: obj.id,
//       name: obj.name,
//       description: obj.description,
//       price: obj.price,
//       type: obj.type
//   }).then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//   })

// data.productRequests.forEach((item) => {
//   db.collection("productRequests").add({
//     dataId: item.id,
//     title: item.title,
//     category: item.category,
//     upvotes: item.upvotes,
//     status: item.status,
//     description: item.description,
//   });
// });

// data.productRequests.forEach((item) => {
//   console.log(item);
// });
// db.collection("feedback/G7DRBnL1FBGJcPW6BNiR/comments")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => console.log(doc.id, doc.data()));
//   });

// db.collection("feedback/")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => console.log(doc.id, doc.data().tags[0]));
//   });
