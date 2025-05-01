import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the correct title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBe('panaderiaJorgito_FrontEnd');
  });

  it('should have handle methods', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    expect(app.handleFilter).toBeDefined();
    expect(app.handleSearch).toBeDefined();
    expect(app.handleReset).toBeDefined();
    
    // Opcional: verificar que son funciones
    expect(typeof app.handleFilter).toBe('function');
    expect(typeof app.handleSearch).toBe('function');
    expect(typeof app.handleReset).toBe('function');
  });
});