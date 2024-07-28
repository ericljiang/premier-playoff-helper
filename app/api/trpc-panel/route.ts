import { NextResponse } from 'next/server';
import { renderTrpcPanel } from '@extendslcc/trpc-panel';
import { appRouter } from '../trpc/[trpc]/router';


export async function GET(req: Request) {
  return new NextResponse(
    renderTrpcPanel(appRouter, {
      url: '/api/trpc',
      transformer: 'superjson',
    }),
    {
      status: 200,
      headers: [['Content-Type', 'text/html'] as [string, string]],
    },
  );
}
