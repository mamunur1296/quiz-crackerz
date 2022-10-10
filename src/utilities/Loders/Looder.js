export const loaderData = async () => {
  const loderData = await fetch(
    "https://openapi.programming-hero.com/api/quiz"
  );
  const alldatas = await loderData.json();
  const data = alldatas.data;

  return { data };
};
