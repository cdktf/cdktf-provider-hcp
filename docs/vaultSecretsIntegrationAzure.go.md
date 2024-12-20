# `vaultSecretsIntegrationAzure` Submodule <a name="`vaultSecretsIntegrationAzure` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationAzure <a name="VaultSecretsIntegrationAzure" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure hcp_vault_secrets_integration_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationazure"

vaultsecretsintegrationazure.NewVaultSecretsIntegrationAzure(scope Construct, id *string, config VaultSecretsIntegrationAzureConfig) VaultSecretsIntegrationAzure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig">VaultSecretsIntegrationAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig">VaultSecretsIntegrationAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putFederatedWorkloadIdentity">PutFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetFederatedWorkloadIdentity">ResetFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putClientSecret"></a>

```go
func PutClientSecret(value VaultSecretsIntegrationAzureClientSecretA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a>

---

##### `PutFederatedWorkloadIdentity` <a name="PutFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putFederatedWorkloadIdentity"></a>

```go
func PutFederatedWorkloadIdentity(value VaultSecretsIntegrationAzureFederatedWorkloadIdentityA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putFederatedWorkloadIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a>

---

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetFederatedWorkloadIdentity` <a name="ResetFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetFederatedWorkloadIdentity"></a>

```go
func ResetFederatedWorkloadIdentity()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetProjectId"></a>

```go
func ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationAzure resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationazure"

vaultsecretsintegrationazure.VaultSecretsIntegrationAzure_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationazure"

vaultsecretsintegrationazure.VaultSecretsIntegrationAzure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationazure"

vaultsecretsintegrationazure.VaultSecretsIntegrationAzure_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationazure"

vaultsecretsintegrationazure.VaultSecretsIntegrationAzure_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VaultSecretsIntegrationAzure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VaultSecretsIntegrationAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VaultSecretsIntegrationAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference">VaultSecretsIntegrationAzureClientSecretAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.federatedWorkloadIdentity">FederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference">VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.clientSecretInput">ClientSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.federatedWorkloadIdentityInput">FederatedWorkloadIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.clientSecret"></a>

```go
func ClientSecret() VaultSecretsIntegrationAzureClientSecretAOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference">VaultSecretsIntegrationAzureClientSecretAOutputReference</a>

---

##### `FederatedWorkloadIdentity`<sup>Required</sup> <a name="FederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.federatedWorkloadIdentity"></a>

```go
func FederatedWorkloadIdentity() VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference">VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference</a>

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.clientSecretInput"></a>

```go
func ClientSecretInput() interface{}
```

- *Type:* interface{}

---

##### `FederatedWorkloadIdentityInput`<sup>Optional</sup> <a name="FederatedWorkloadIdentityInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.federatedWorkloadIdentityInput"></a>

```go
func FederatedWorkloadIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.capabilities"></a>

```go
func Capabilities() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationAzureClientSecretA <a name="VaultSecretsIntegrationAzureClientSecretA" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationazure"

&vaultsecretsintegrationazure.VaultSecretsIntegrationAzureClientSecretA {
	ClientId: *string,
	ClientSecret: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.clientId">ClientId</a></code> | <code>*string</code> | Azure client ID corresponding to the Azure application. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Secret value corresponding to the Azure client secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.tenantId">TenantId</a></code> | <code>*string</code> | Azure tenant ID corresponding to the Azure application. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure#client_id VaultSecretsIntegrationAzure#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Secret value corresponding to the Azure client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure#client_secret VaultSecretsIntegrationAzure#client_secret}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure#tenant_id VaultSecretsIntegrationAzure#tenant_id}

---

### VaultSecretsIntegrationAzureConfig <a name="VaultSecretsIntegrationAzureConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationazure"

&vaultsecretsintegrationazure.VaultSecretsIntegrationAzureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Capabilities: *[]*string,
	Name: *string,
	ClientSecret: github.com/cdktf/cdktf-provider-hcp-go/hcp/v9.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA,
	FederatedWorkloadIdentity: github.com/cdktf/cdktf-provider-hcp-go/hcp/v9.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.name">Name</a></code> | <code>*string</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a></code> | Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.federatedWorkloadIdentity">FederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a></code> | (Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.capabilities"></a>

```go
Capabilities *[]*string
```

- *Type:* *[]*string

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure#capabilities VaultSecretsIntegrationAzure#capabilities}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure#name VaultSecretsIntegrationAzure#name}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.clientSecret"></a>

```go
ClientSecret VaultSecretsIntegrationAzureClientSecretA
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a>

Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure#client_secret VaultSecretsIntegrationAzure#client_secret}

---

##### `FederatedWorkloadIdentity`<sup>Optional</sup> <a name="FederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.federatedWorkloadIdentity"></a>

```go
FederatedWorkloadIdentity VaultSecretsIntegrationAzureFederatedWorkloadIdentityA
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a>

(Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure#federated_workload_identity VaultSecretsIntegrationAzure#federated_workload_identity}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure#project_id VaultSecretsIntegrationAzure#project_id}

---

### VaultSecretsIntegrationAzureFederatedWorkloadIdentityA <a name="VaultSecretsIntegrationAzureFederatedWorkloadIdentityA" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationazure"

&vaultsecretsintegrationazure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA {
	Audience: *string,
	ClientId: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.audience">Audience</a></code> | <code>*string</code> | Audience configured on the Azure federated identity credentials to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.clientId">ClientId</a></code> | <code>*string</code> | Azure client ID corresponding to the Azure application. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.tenantId">TenantId</a></code> | <code>*string</code> | Azure tenant ID corresponding to the Azure application. |

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Audience configured on the Azure federated identity credentials to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure#audience VaultSecretsIntegrationAzure#audience}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure#client_id VaultSecretsIntegrationAzure#client_id}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.101.0/docs/resources/vault_secrets_integration_azure#tenant_id VaultSecretsIntegrationAzure#tenant_id}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationAzureClientSecretAOutputReference <a name="VaultSecretsIntegrationAzureClientSecretAOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationazure"

vaultsecretsintegrationazure.NewVaultSecretsIntegrationAzureClientSecretAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsIntegrationAzureClientSecretAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference <a name="VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v9/vaultsecretsintegrationazure"

vaultsecretsintegrationazure.NewVaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



