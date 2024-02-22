export default defineEventHandler(async (event) => {
  /*
    // handle query params
  const { name } = getQuery(event);

  // handle Post data
  const { age } = await readBody(event);
*/

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_qDGKoVNqWycx1mbKa3tYan2oVL1DEwne1Bf1IvOO"
  );

  return data;
});
