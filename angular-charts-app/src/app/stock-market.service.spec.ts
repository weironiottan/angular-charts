import { TestBed } from '@angular/core/testing';

import { StockMarketService } from './stock-market.service';

describe('CoinrankingService', () => {
  let service: StockMarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockMarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
