export default function fetchGroups(url: string) {
  return fetch(url)
    .then((data: any) => data.text())
}

