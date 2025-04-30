# `vaultSecretsIntegrationAzure` Submodule <a name="`vaultSecretsIntegrationAzure` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationAzure <a name="VaultSecretsIntegrationAzure" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure hcp_vault_secrets_integration_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer"></a>

```typescript
import { vaultSecretsIntegrationAzure } from '@cdktf/provider-hcp'

new vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure(scope: Construct, id: string, config: VaultSecretsIntegrationAzureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig">VaultSecretsIntegrationAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig">VaultSecretsIntegrationAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putClientSecret">putClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putFederatedWorkloadIdentity">putFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetFederatedWorkloadIdentity">resetFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientSecret` <a name="putClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putClientSecret"></a>

```typescript
public putClientSecret(value: VaultSecretsIntegrationAzureClientSecretA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a>

---

##### `putFederatedWorkloadIdentity` <a name="putFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putFederatedWorkloadIdentity"></a>

```typescript
public putFederatedWorkloadIdentity(value: VaultSecretsIntegrationAzureFederatedWorkloadIdentityA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.putFederatedWorkloadIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a>

---

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetFederatedWorkloadIdentity` <a name="resetFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetFederatedWorkloadIdentity"></a>

```typescript
public resetFederatedWorkloadIdentity(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationAzure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isConstruct"></a>

```typescript
import { vaultSecretsIntegrationAzure } from '@cdktf/provider-hcp'

vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformElement"></a>

```typescript
import { vaultSecretsIntegrationAzure } from '@cdktf/provider-hcp'

vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformResource"></a>

```typescript
import { vaultSecretsIntegrationAzure } from '@cdktf/provider-hcp'

vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport"></a>

```typescript
import { vaultSecretsIntegrationAzure } from '@cdktf/provider-hcp'

vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultSecretsIntegrationAzure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultSecretsIntegrationAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultSecretsIntegrationAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference">VaultSecretsIntegrationAzureClientSecretAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.federatedWorkloadIdentity">federatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference">VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.capabilitiesInput">capabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.clientSecretInput">clientSecretInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.federatedWorkloadIdentityInput">federatedWorkloadIdentityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.clientSecret"></a>

```typescript
public readonly clientSecret: VaultSecretsIntegrationAzureClientSecretAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference">VaultSecretsIntegrationAzureClientSecretAOutputReference</a>

---

##### `federatedWorkloadIdentity`<sup>Required</sup> <a name="federatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.federatedWorkloadIdentity"></a>

```typescript
public readonly federatedWorkloadIdentity: VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference">VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference</a>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: string[];
```

- *Type:* string[]

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: IResolvable | VaultSecretsIntegrationAzureClientSecretA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a>

---

##### `federatedWorkloadIdentityInput`<sup>Optional</sup> <a name="federatedWorkloadIdentityInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.federatedWorkloadIdentityInput"></a>

```typescript
public readonly federatedWorkloadIdentityInput: IResolvable | VaultSecretsIntegrationAzureFederatedWorkloadIdentityA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationAzureClientSecretA <a name="VaultSecretsIntegrationAzureClientSecretA" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.Initializer"></a>

```typescript
import { vaultSecretsIntegrationAzure } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationAzureClientSecretA: vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.clientId">clientId</a></code> | <code>string</code> | Azure client ID corresponding to the Azure application. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.clientSecret">clientSecret</a></code> | <code>string</code> | Secret value corresponding to the Azure client secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.tenantId">tenantId</a></code> | <code>string</code> | Azure tenant ID corresponding to the Azure application. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#client_id VaultSecretsIntegrationAzure#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Secret value corresponding to the Azure client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#client_secret VaultSecretsIntegrationAzure#client_secret}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#tenant_id VaultSecretsIntegrationAzure#tenant_id}

---

### VaultSecretsIntegrationAzureConfig <a name="VaultSecretsIntegrationAzureConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.Initializer"></a>

```typescript
import { vaultSecretsIntegrationAzure } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationAzureConfig: vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.capabilities">capabilities</a></code> | <code>string[]</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.name">name</a></code> | <code>string</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a></code> | Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.federatedWorkloadIdentity">federatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a></code> | (Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.projectId">projectId</a></code> | <code>string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#capabilities VaultSecretsIntegrationAzure#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#name VaultSecretsIntegrationAzure#name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: VaultSecretsIntegrationAzureClientSecretA;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a>

Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#client_secret VaultSecretsIntegrationAzure#client_secret}

---

##### `federatedWorkloadIdentity`<sup>Optional</sup> <a name="federatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.federatedWorkloadIdentity"></a>

```typescript
public readonly federatedWorkloadIdentity: VaultSecretsIntegrationAzureFederatedWorkloadIdentityA;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a>

(Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#federated_workload_identity VaultSecretsIntegrationAzure#federated_workload_identity}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#project_id VaultSecretsIntegrationAzure#project_id}

---

### VaultSecretsIntegrationAzureFederatedWorkloadIdentityA <a name="VaultSecretsIntegrationAzureFederatedWorkloadIdentityA" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.Initializer"></a>

```typescript
import { vaultSecretsIntegrationAzure } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationAzureFederatedWorkloadIdentityA: vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.audience">audience</a></code> | <code>string</code> | Audience configured on the Azure federated identity credentials to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.clientId">clientId</a></code> | <code>string</code> | Azure client ID corresponding to the Azure application. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.tenantId">tenantId</a></code> | <code>string</code> | Azure tenant ID corresponding to the Azure application. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience configured on the Azure federated identity credentials to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#audience VaultSecretsIntegrationAzure#audience}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#client_id VaultSecretsIntegrationAzure#client_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_secrets_integration_azure#tenant_id VaultSecretsIntegrationAzure#tenant_id}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationAzureClientSecretAOutputReference <a name="VaultSecretsIntegrationAzureClientSecretAOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegrationAzure } from '@cdktf/provider-hcp'

new vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationAzureClientSecretA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureClientSecretA">VaultSecretsIntegrationAzureClientSecretA</a>

---


### VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference <a name="VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegrationAzure } from '@cdktf/provider-hcp'

new vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationAzureFederatedWorkloadIdentityA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationAzure.VaultSecretsIntegrationAzureFederatedWorkloadIdentityA">VaultSecretsIntegrationAzureFederatedWorkloadIdentityA</a>

---



