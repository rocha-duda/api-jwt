echo "=== TESTE: Registrar com e-mail REPETIDO ==="
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{"name": "Usuario Existente", "email": "existente@email.com", "password": "Senha@123"}'
echo ""