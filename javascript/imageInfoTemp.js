let imageInfo = document.querySelectorAll(".image-picker-container .selected");
let infoTitle = document.getElementById("imageTitle");
let infoDescription = document.getElementById("imageDescription");
if (imageInfo[0].id == "ngc1850-blue") {
  infoTitle.innerHTML = "NGC 1850";
  infoDescription.innerHTML =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam amet architecto, magnam repellendus esse vitae? Ducimus fuga amet quas earum exercitationem impedit necessitatibus consequuntur, voluptatibus suscipit ipsam eligendi, nesciunt consectetur ab maxime dolore fugit veritatis quae ipsum fugiat, distinctio officiis? Animi illum, cumque, aperiam fugit rem, vitae a libero laudantium consequuntur sequi accusantium maiores earum asperiores. Quidem, nobis omnis! Nobis eveniet cupiditate a ipsum praesentium quae voluptates facere ratione! Qui id eaque sit reiciendis voluptate accusantium commodi eligendi nisi adipisci, aliquid provident similique exercitationem, quaerat molestias odit quia sunt ratione. Accusamus eius, adipisci fuga ad voluptatibus corporis eligendi modi!";
} else if (imageInfo[0].id == "ngc4689") {
  infoTitle.innerHTML = "NGC 4689";
  infoDescription.innerHTML =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur vitae magni asperiores iusto odit aspernatur quasi blanditiis provident sint perspiciatis!";
} else if (imageInfo[0].id == "acos295") {
  infoTitle.innerHTML = "ACO S 295";
  infoDescription.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore rerum commodi excepturi et, quis eum aspernatur laudantium nemo, fugit minus necessitatibus, repudiandae veritatis qui modi.";
} else if (imageInfo[0].id == "n44") {
  infoTitle.innerHTML = "N44";
  infoDescription.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam autem animi repellendus maxime consequatur ducimus aut quos? Magni nesciunt saepe beatae nobis vel deleniti non sunt alias.";
} else if (imageInfo[0].id == "ngc4535") {
  infoTitle.innerHTML = "NGC 4535";
  infoDescription.innerHTML =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fugiat minus veritatis veniam id quos delectus, adipisci sapiente vel non ea excepturi reprehenderit? Nam cumque dicta repudiandae, aperiam ipsum enim.";
} else if (imageInfo[0].id == "m94") {
  infoTitle.innerHTML = "M94";
  infoDescription.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia qui enim officiis modi dolores facilis ipsam soluta, aperiam atque voluptates repellat aspernatur impedit minima sit error odio voluptas fugit culpa consequatur.";
} else if (imageInfo[0].id == "c86") {
  infoTitle.innerHTML = "C86";
  infoDescription.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita labore facilis laudantium maiores dignissimos magni unde eius fuga voluptates nobis commodi consequatur natus eveniet harum pariatur adipisci, omnis error beatae quaerat, nulla ea officiis!";
} else if (imageInfo[0].id == "monkeyhead") {
  infoTitle.innerHTML = "Monkey Head Nebula";
  infoDescription.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem ad doloribus, esse rerum molestiae vel fuga consequatur assumenda voluptatem quis laudantium rem ab! Aperiam esse tempora iusto, dolorum excepturi, id impedit voluptatum, facere quam maiores ad.";
} else if (imageInfo[0].id == "ngc3603") {
  infoTitle.innerHTML = "NGC 3603";
  infoDescription.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus a consectetur expedita necessitatibus corrupti consequatur totam fuga tempore modi. Ea quia iusto facere id sed ipsum omnis eos est, repellat similique blanditiis, ipsam hic maiores aspernatur ullam quidem possimus.";
} else if (imageInfo[0].id == "messier4") {
  infoTitle.innerHTML = "Messier 4";
  infoDescription.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, reiciendis qui eos quae repudiandae illo quaerat amet at quibusdam dicta explicabo ad quasi autem dolor eum, voluptatem quidem, ea maiores perferendis optio nobis natus! Modi omnis inventore facere impedit nemo adipisci repellendus delectus atque maiores.";
}

// imageInfo.addEventListener("change", (event) => {
//   if (imageInfo.value == "ngc1850-blue") {
//     infoTitle.innerHTML = "NGC 1850";
//     infoDescription.innerHTML =
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam amet architecto, magnam repellendus esse vitae? Ducimus fuga amet quas earum exercitationem impedit necessitatibus consequuntur, voluptatibus suscipit ipsam eligendi, nesciunt consectetur ab maxime dolore fugit veritatis quae ipsum fugiat, distinctio officiis? Animi illum, cumque, aperiam fugit rem, vitae a libero laudantium consequuntur sequi accusantium maiores earum asperiores. Quidem, nobis omnis! Nobis eveniet cupiditate a ipsum praesentium quae voluptates facere ratione! Qui id eaque sit reiciendis voluptate accusantium commodi eligendi nisi adipisci, aliquid provident similique exercitationem, quaerat molestias odit quia sunt ratione. Accusamus eius, adipisci fuga ad voluptatibus corporis eligendi modi!";
//   } else if (imageInfo.value == "ngc4689") {
//     infoTitle.innerHTML = "NGC 4689";
//     infoDescription.innerHTML =
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur vitae magni asperiores iusto odit aspernatur quasi blanditiis provident sint perspiciatis!";
//   } else if (imageInfo.value == "acos295") {
//     infoTitle.innerHTML = "ACO S 295";
//     infoDescription.innerHTML =
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore rerum commodi excepturi et, quis eum aspernatur laudantium nemo, fugit minus necessitatibus, repudiandae veritatis qui modi.";
//   } else if (imageInfo.value == "n44") {
//     infoTitle.innerHTML = "N44";
//     infoDescription.innerHTML =
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam autem animi repellendus maxime consequatur ducimus aut quos? Magni nesciunt saepe beatae nobis vel deleniti non sunt alias.";
//   } else if (imageInfo.value == "ngc4535") {
//     infoTitle.innerHTML = "NGC 4535";
//     infoDescription.innerHTML =
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fugiat minus veritatis veniam id quos delectus, adipisci sapiente vel non ea excepturi reprehenderit? Nam cumque dicta repudiandae, aperiam ipsum enim.";
//   } else if (imageInfo.value == "m94") {
//     infoTitle.innerHTML = "M94";
//     infoDescription.innerHTML =
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia qui enim officiis modi dolores facilis ipsam soluta, aperiam atque voluptates repellat aspernatur impedit minima sit error odio voluptas fugit culpa consequatur.";
//   } else if (imageInfo.value == "c86") {
//     infoTitle.innerHTML = "C86";
//     infoDescription.innerHTML =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita labore facilis laudantium maiores dignissimos magni unde eius fuga voluptates nobis commodi consequatur natus eveniet harum pariatur adipisci, omnis error beatae quaerat, nulla ea officiis!";
//   } else if (imageInfo.value == "monkeyhead") {
//     infoTitle.innerHTML = "Monkey Head Nebula";
//     infoDescription.innerHTML =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem ad doloribus, esse rerum molestiae vel fuga consequatur assumenda voluptatem quis laudantium rem ab! Aperiam esse tempora iusto, dolorum excepturi, id impedit voluptatum, facere quam maiores ad.";
//   } else if (imageInfo.value == "ngc3603") {
//     infoTitle.innerHTML = "NGC 3603";
//     infoDescription.innerHTML =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus a consectetur expedita necessitatibus corrupti consequatur totam fuga tempore modi. Ea quia iusto facere id sed ipsum omnis eos est, repellat similique blanditiis, ipsam hic maiores aspernatur ullam quidem possimus.";
//   } else if (imageInfo.value == "messier4") {
//     infoTitle.innerHTML = "Messier 4";
//     infoDescription.innerHTML =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, reiciendis qui eos quae repudiandae illo quaerat amet at quibusdam dicta explicabo ad quasi autem dolor eum, voluptatem quidem, ea maiores perferendis optio nobis natus! Modi omnis inventore facere impedit nemo adipisci repellendus delectus atque maiores.";
//   }
// });

leftArrow.addEventListener("click", function (event) {
  let updatedImageInfo = document.querySelectorAll(
    ".image-picker-container .selected"
  );
  if (updatedImageInfo[0].id == "ngc1850-blue") {
    infoTitle.innerHTML = "NGC 1850";
    infoDescription.innerHTML =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam amet architecto, magnam repellendus esse vitae? Ducimus fuga amet quas earum exercitationem impedit necessitatibus consequuntur, voluptatibus suscipit ipsam eligendi, nesciunt consectetur ab maxime dolore fugit veritatis quae ipsum fugiat, distinctio officiis? Animi illum, cumque, aperiam fugit rem, vitae a libero laudantium consequuntur sequi accusantium maiores earum asperiores. Quidem, nobis omnis! Nobis eveniet cupiditate a ipsum praesentium quae voluptates facere ratione! Qui id eaque sit reiciendis voluptate accusantium commodi eligendi nisi adipisci, aliquid provident similique exercitationem, quaerat molestias odit quia sunt ratione. Accusamus eius, adipisci fuga ad voluptatibus corporis eligendi modi!";
  } else if (updatedImageInfo[0].id == "ngc4689") {
    infoTitle.innerHTML = "NGC 4689";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur vitae magni asperiores iusto odit aspernatur quasi blanditiis provident sint perspiciatis!";
  } else if (updatedImageInfo[0].id == "acos295") {
    infoTitle.innerHTML = "ACO S 295";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore rerum commodi excepturi et, quis eum aspernatur laudantium nemo, fugit minus necessitatibus, repudiandae veritatis qui modi.";
  } else if (updatedImageInfo[0].id == "n44") {
    infoTitle.innerHTML = "N44";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam autem animi repellendus maxime consequatur ducimus aut quos? Magni nesciunt saepe beatae nobis vel deleniti non sunt alias.";
  } else if (updatedImageInfo[0].id == "ngc4535") {
    infoTitle.innerHTML = "NGC 4535";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fugiat minus veritatis veniam id quos delectus, adipisci sapiente vel non ea excepturi reprehenderit? Nam cumque dicta repudiandae, aperiam ipsum enim.";
  } else if (updatedImageInfo[0].id == "m94") {
    infoTitle.innerHTML = "M94";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia qui enim officiis modi dolores facilis ipsam soluta, aperiam atque voluptates repellat aspernatur impedit minima sit error odio voluptas fugit culpa consequatur.";
  } else if (updatedImageInfo[0].id == "c86") {
    infoTitle.innerHTML = "C86";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita labore facilis laudantium maiores dignissimos magni unde eius fuga voluptates nobis commodi consequatur natus eveniet harum pariatur adipisci, omnis error beatae quaerat, nulla ea officiis!";
  } else if (updatedImageInfo[0].id == "monkeyhead") {
    infoTitle.innerHTML = "Monkey Head Nebula";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem ad doloribus, esse rerum molestiae vel fuga consequatur assumenda voluptatem quis laudantium rem ab! Aperiam esse tempora iusto, dolorum excepturi, id impedit voluptatum, facere quam maiores ad.";
  } else if (updatedImageInfo[0].id == "ngc3603") {
    infoTitle.innerHTML = "NGC 3603";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus a consectetur expedita necessitatibus corrupti consequatur totam fuga tempore modi. Ea quia iusto facere id sed ipsum omnis eos est, repellat similique blanditiis, ipsam hic maiores aspernatur ullam quidem possimus.";
  } else if (updatedImageInfo[0].id == "messier4") {
    infoTitle.innerHTML = "Messier 4";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, reiciendis qui eos quae repudiandae illo quaerat amet at quibusdam dicta explicabo ad quasi autem dolor eum, voluptatem quidem, ea maiores perferendis optio nobis natus! Modi omnis inventore facere impedit nemo adipisci repellendus delectus atque maiores.";
  }
});
rightArrow.addEventListener("click", function (event) {
  let updatedImageInfo = document.querySelectorAll(
    ".image-picker-container .selected"
  );
  if (updatedImageInfo[0].id == "ngc1850-blue") {
    infoTitle.innerHTML = "NGC 1850";
    infoDescription.innerHTML =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam amet architecto, magnam repellendus esse vitae? Ducimus fuga amet quas earum exercitationem impedit necessitatibus consequuntur, voluptatibus suscipit ipsam eligendi, nesciunt consectetur ab maxime dolore fugit veritatis quae ipsum fugiat, distinctio officiis? Animi illum, cumque, aperiam fugit rem, vitae a libero laudantium consequuntur sequi accusantium maiores earum asperiores. Quidem, nobis omnis! Nobis eveniet cupiditate a ipsum praesentium quae voluptates facere ratione! Qui id eaque sit reiciendis voluptate accusantium commodi eligendi nisi adipisci, aliquid provident similique exercitationem, quaerat molestias odit quia sunt ratione. Accusamus eius, adipisci fuga ad voluptatibus corporis eligendi modi!";
  } else if (updatedImageInfo[0].id == "ngc4689") {
    infoTitle.innerHTML = "NGC 4689";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur vitae magni asperiores iusto odit aspernatur quasi blanditiis provident sint perspiciatis!";
  } else if (updatedImageInfo[0].id == "acos295") {
    infoTitle.innerHTML = "ACO S 295";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore rerum commodi excepturi et, quis eum aspernatur laudantium nemo, fugit minus necessitatibus, repudiandae veritatis qui modi.";
  } else if (updatedImageInfo[0].id == "n44") {
    infoTitle.innerHTML = "N44";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam autem animi repellendus maxime consequatur ducimus aut quos? Magni nesciunt saepe beatae nobis vel deleniti non sunt alias.";
  } else if (updatedImageInfo[0].id == "ngc4535") {
    infoTitle.innerHTML = "NGC 4535";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fugiat minus veritatis veniam id quos delectus, adipisci sapiente vel non ea excepturi reprehenderit? Nam cumque dicta repudiandae, aperiam ipsum enim.";
  } else if (updatedImageInfo[0].id == "m94") {
    infoTitle.innerHTML = "M94";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia qui enim officiis modi dolores facilis ipsam soluta, aperiam atque voluptates repellat aspernatur impedit minima sit error odio voluptas fugit culpa consequatur.";
  } else if (updatedImageInfo[0].id == "c86") {
    infoTitle.innerHTML = "C86";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita labore facilis laudantium maiores dignissimos magni unde eius fuga voluptates nobis commodi consequatur natus eveniet harum pariatur adipisci, omnis error beatae quaerat, nulla ea officiis!";
  } else if (updatedImageInfo[0].id == "monkeyhead") {
    infoTitle.innerHTML = "Monkey Head Nebula";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem ad doloribus, esse rerum molestiae vel fuga consequatur assumenda voluptatem quis laudantium rem ab! Aperiam esse tempora iusto, dolorum excepturi, id impedit voluptatum, facere quam maiores ad.";
  } else if (updatedImageInfo[0].id == "ngc3603") {
    infoTitle.innerHTML = "NGC 3603";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus a consectetur expedita necessitatibus corrupti consequatur totam fuga tempore modi. Ea quia iusto facere id sed ipsum omnis eos est, repellat similique blanditiis, ipsam hic maiores aspernatur ullam quidem possimus.";
  } else if (updatedImageInfo[0].id == "messier4") {
    infoTitle.innerHTML = "Messier 4";
    infoDescription.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, reiciendis qui eos quae repudiandae illo quaerat amet at quibusdam dicta explicabo ad quasi autem dolor eum, voluptatem quidem, ea maiores perferendis optio nobis natus! Modi omnis inventore facere impedit nemo adipisci repellendus delectus atque maiores.";
  }
});
