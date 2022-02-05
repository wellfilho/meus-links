// Buscar os links salvos

export async function getLinkSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

// Salvar um link no LocalStorage

export async function saveLink(key, newLink) {
  let linksStored = await getLinkSave(key);

  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    return;
  }

  linksStored.push(newLink);

  await localStorage.setItem(key, JSON.stringify(linksStored));
}

// Deletar um link

export function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("@encurtaLink", JSON.stringify(myLinks));

  return myLinks;
}
