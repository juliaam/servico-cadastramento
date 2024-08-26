import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const appsData = [
    { nome: 'App One', custoMensal: 9.99 },
    { nome: 'App Two', custoMensal: 19.99 },
    { nome: 'App Three', custoMensal: 14.99 },
    { nome: 'App Four', custoMensal: 29.99 },
    { nome: 'App Five', custoMensal: 24.99 },
  ];

  const clientsData = [
    { nome: 'Cliente 1', email: 'cliente1@example.com' },
    { nome: 'Cliente 2', email: 'cliente2@example.com' },
    { nome: 'Cliente 3', email: 'cliente3@example.com' },
    { nome: 'Cliente 4', email: 'cliente4@example.com' },
    { nome: 'Cliente 5', email: 'cliente5@example.com' },
    { nome: 'Cliente 6', email: 'cliente6@example.com' },
    { nome: 'Cliente 7', email: 'cliente7@example.com' },
    { nome: 'Cliente 8', email: 'cliente8@example.com' },
    { nome: 'Cliente 9', email: 'cliente9@example.com' },
    { nome: 'Cliente 10', email: 'cliente10@example.com' },
  ];

  await prisma.$transaction(async (prisma) => {
    const apps = await prisma.aplicativo.createMany({
      data: appsData,
    });

    const clients = await prisma.cliente.createMany({
      data: clientsData,
    });

    const appRecords = await prisma.aplicativo.findMany();
    const clientRecords = await prisma.cliente.findMany();

    const subscriptions = await prisma.assinatura.createMany({
      data: [
        { codApp: appRecords[0].codigo, codCli: clientRecords[0].codigo },
        { codApp: appRecords[1].codigo, codCli: clientRecords[1].codigo },
        { codApp: appRecords[2].codigo, codCli: clientRecords[2].codigo },
        { codApp: appRecords[3].codigo, codCli: clientRecords[3].codigo },
        { codApp: appRecords[4].codigo, codCli: clientRecords[4].codigo },
      ],
    });

    console.log({ apps, clients, subscriptions });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
