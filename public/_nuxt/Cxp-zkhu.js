const e=t=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(t))throw new Error("Дата должна быть в формате YYYY-MM-DD");const[r,o,d]=t.split("-");return`${d}.${o}.${r}`};export{e as d};
