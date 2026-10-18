import { Controller, Get } from '@nestjs/common';
@Controller()
export class FoundationController {
  @Get('health') health() { return { status: 'ok', service: 'magkahiusa-api' } as const; }
  @Get('api/v1/meta') meta() {
    return { name: 'MAGKAHIUSA–TALIBON', version: '0.1.0', status: 'foundation-only', disclaimer: 'No authoritative resident, incident, ayuda or financial data is served.' } as const;
  }
}
